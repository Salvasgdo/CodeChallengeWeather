import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import {fetchName} from '../services/NameService';
import {fetchWeather} from '../services/WeatherService';
import SearchBarComponent from '../components/SearchBarComponent';
import styles from './HomeScreen.style';

export default function HomeScreen() {
  const [city, setCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    const searchName = async () => {
      if (city.trim() !== '') {
        const data = await fetchName(city);
        setSearchResults(data || []);
      } else {
        setSearchResults([]);
      }
    };

    searchName();
  }, [city]);

  useEffect(() => {
    if (selectedName) {
      fetchData(selectedName.lat, selectedName.long);
    }
  }, [selectedName]);

  const handleSearch = city => {
    setCity(city);
  };

  const handleSelect = result => {
    setSelectedName(result);
    setBottomSheetVisible(true);
  };

  const fetchData = async (lat, long) => {
    const data = await fetchWeather(lat, long);
    setDailyForecast(data);
  };

  const renderIcon = resultType => {
    switch (resultType) {
      case 'city':
        return require('../assets/icons/city.png');
      case 'terminal':
        return require('../assets/icons/busStation.png');
      default:
        return require('../assets/icons/airport.png');
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
            <Image source={renderIcon(item.result_type)} style={styles.icon} />
          </View>
          <Text style={styles.title}>
            {item.display}, {item.city_name}, {item.state}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem7day = ({item}) => {
    const currentDate = new Date(item.dt * 1000).getDay();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayName = daysOfWeek[currentDate];

    return (
      <View style={styles.rowContainer2}>
        <View style={styles.dayContainer}>
          <Text style={styles.dayText}>{dayName}</Text>
        </View>
        <View style={styles.iconContainer2}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempHeaderText}>Min</Text>
          <Text style={styles.tempText}>{item.temp.min}°</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempHeaderText}>Max</Text>
          <Text style={styles.tempText}>{item.temp.max}°</Text>
        </View>
      </View>
    );
  };

  const RenderNoContent = () => {
    return (
      <View style={styles.containerNoContent}>
        <Text style={styles.titleNoContent}>Welcome to the Weather App!</Text>
        <Text style={styles.descriptionNoContent}>
          Here you'll find all the information you need.
        </Text>
        <View style={styles.imagecontainerNoContent}>
          <Image
            source={require('../assets/images/weather-app.png')}
            style={styles.image}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <SearchBarComponent onSearch={handleSearch} />
      <FlatList
        data={searchResults.slice(0, 13)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<RenderNoContent />}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomSheetVisible}
        onRequestClose={() => {
          setBottomSheetVisible(false);
        }}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheet}>
            {selectedName && <Text style={styles.titleText}>{selectedName.display}</Text>}
            {dailyForecast && (
              <View style={styles.weatherContainer}>
                <View style={styles.weatherRow}>
                  <Image
                    source={{
                      uri: `https://openweathermap.org/img/wn/${dailyForecast.current.weather[0]?.icon}@2x.png`,
                    }}
                    style={styles.weatherIcon}
                  />
                  <View style={styles.weatherTextContainer}>
                    <Text style={styles.weatherDescription}>
                      {dailyForecast.current.weather[0]?.description}
                    </Text>
                    <Text style={styles.weatherTemp}>
                      {dailyForecast.current.temp}°
                    </Text>
                  </View>
                </View>
              </View>
            )}
            <View style={styles.forecastContainer}>
              {dailyForecast && (
                <FlatList
                  data={dailyForecast.daily}
                  renderItem={renderItem7day}
                  keyExtractor={item => item.dt}
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setBottomSheetVisible(false)}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
