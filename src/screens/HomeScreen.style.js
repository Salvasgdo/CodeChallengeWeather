import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#176B87',
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    paddingRight: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomSheet: {
    backgroundColor: '#86B6F6',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dayContainer: {
    flex: 1,
  },
  dayText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EEF5FF',
  },
  iconContainer2: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  tempContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tempText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#222831',
  },
  weatherContainer: {
    marginBottom: 20,
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  weatherTextContainer: {
    flexDirection: 'column',
  },
  weatherDescription: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#EEF5FF',
  },
  weatherTemp: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#176B87',
  },
  tempHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#176B87',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  containerNoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  titleNoContent: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#11235A'
  },
  descriptionNoContent: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#596FB7'
  },
  image:{
    width: 150,
    height: 150,
  },
  imagecontainerNoContent: {
    marginTop:20
  },
});
