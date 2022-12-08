import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import PieChart from 'react-native-pie-chart';
function Home({route, navigation}) {
  const widthAndHeight = 180;

  const sliceColor = ['#3DBE29', '#51E1ED', '#FF6263'];
  return (
    <View>
      <ScrollView>
        <View style={styles.headView}>
          <Text style={styles.main}>
            {/* Headline */}
            <Text style={styles.head}>
              Veteran film actor Jharana Das dies{' '}
            </Text>

            {/* Time */}
            <Text style={styles.time}> 1 min ago</Text>
          </Text>
        </View>

        {/* Dynamic image */}
        <View style={StyleSheet.imgView}>
          <Image source={require('../images/img2.jpg')} style={styles.img} />
        </View>

        {/* Summary using sentimental analysis */}
        <View style={styles.paraView}>
          <Text style={styles.para}>
            Family sources reported Friday that veteran Odia film star Jharana
            Das died at her Cuttack home. 77. Jharana, a recipient of the Jaydev
            Puraskar for her lifetime contributions to Odia cinema, was ill.
            Family sources stated she died Thursday night. President Droupadi
            Murmu, Odisha chief minister Naveen Patnaik, and Union education
            minister Dharmendra Pradhan mourned Jharana. Saddened by Jharana
            Das' death. She left an indelible mark on Odia cinema. My
            condolences to her family and fans tweeting. Odisha's CM said
            Jharana's funeral will be state-sponsored. "Her stage and screen
            performances are unforgettable. I pray for her soul and the bereaved
            family "Patnaik stated.Family sources stated Gorakabar in Cuttack
            will cremate the corpses. Jharana began performing in 1960s films
            like Shree Jagannath, Nari, Adinamegha, Hisabnikas, Pujafula,
            Amadabata, Abhinetri, Malajanha, and Heera Nella.
          </Text>

          <Text style={styles.para}></Text>
          <Text></Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={[12, 70, 18]}
            sliceColor={sliceColor}
            style={{marginLeft: 60, marginRight: 50}}
          />

          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              opacity: 0.5,
              fontWeight: 'bold',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
            }}>
            Positive: green, Negative: Red, Neutral:Blue
          </Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.headView}>
          <Text style={styles.main}>
            {/* Headline */}
            <Text style={styles.head}>
              {' '}
              Korea Qualifies for Knockout Stage{' '}
            </Text>
            {/* Time */}
            <Text style={styles.time}>2 min ago</Text>
          </Text>
        </View>
        {/* Dynamic image */}
        <View style={StyleSheet.imgView}>
          <Image source={require('../images/img3.jpg')} style={styles.img} />
        </View>
        {/* Summary using sentimental analysis */}
        <View style={styles.paraView}>
          <Text style={styles.para}>
            South Korea beat Portugal to move to the round of 16 at Uruguay's
            cost a night after Japan upset Spain and topped their group.  South
            Korea seemed doomed against Portugal's with Cristiano Ronaldo
            and Ricardo Horta's fifth-minute goal made things worse. The Koreans
            bravely defended for the following 20 minutes, preventing Portugal
            from scoring. Kim Young-27th-minute Gwon's equaliser rewarded the
            persistence.For the following 63 minutes, they had to score another
            goal, keep Portugal from regaining the lead, and pray that group
            rivals Uruguay wouldn't add to the two goals they scored in the
            first 32 minutes against Ghana in the other match. Korean fans, who
            had come in droves with their trademark horns, were frantically
            checking the Portugal-Ghana score in the stands. As they struggled
            to score, Korea's night seemed bleak. Like the Japanese the other
            night against Spain, they did not give up. They kept attacking the
            Portuguese goalmouth, and 31 seconds into stoppage time, this arid
            city found hope. Their star Heung-min Son's lung-busting run to
            Portugal's end created the goal. He made an inch-perfect pass to
            Hwang Hee-Chan, who was shadow running, inside the Portugal post.
            Koreans in the seats, dugout, and on the field jumped with pleasure.
          </Text>

          <Text style={styles.para}></Text>
          <Text></Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={[92, 8, 0]}
            sliceColor={sliceColor}
            style={{marginLeft: 60, marginRight: 50}}
          />
          <Text></Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              opacity: 0.5,
              fontWeight: 'bold',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
            }}>
            Positive: green, Negative: Red, Neutral:Blue
          </Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.headView}>
          <Text style={styles.main}>
            {/* Headline */}
            <Text style={styles.head}> Section 144 Imposed in Mumbai </Text>
            {/* Time */}
            <Text style={styles.time}> 2mins ago</Text>
          </Text>
        </View>
        <View style={StyleSheet.imgView}>
          {/* Dynamic Image */}
          <Image source={require('../images/img4.jpg')} style={styles.img} />
        </View>

        <View style={styles.paraView}>
          {/* Summary using sentimental analysis */}
          <Text style={styles.para}>
            Due to 30th Anniversary of Babri masjid and 65th Death anniversary
            of Ambedkar, Mumbai Police reportedly invoked Section 144 to
            maintain peace and public
          </Text>

          <Text style={styles.para}></Text>
          <Text></Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={[25, 55, 20]}
            sliceColor={sliceColor}
            style={{marginLeft: 60, marginRight: 50}}
          />
          <Text></Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              opacity: 0.5,
              fontWeight: 'bold',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
            }}>
            Positive: Green, negative: red, neutral:Blue
          </Text>
        </View>

        <View style={styles.horizontalLine} />
      </ScrollView>
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  main: {
    color: 'black',
    fontSize: 15,
  },

  head: {
    fontWeight: 'bold',
  },
  headView: {
    padding: 18,
  },
  time: {
    fontSize: 11,
    opacity: 0.6,
    color: '#000',
  },

  horizontalLine: {
    height: 1,
    width: '90%',
    backgroundColor: '#000',
    opacity: 0.5,
    marginTop: 8,
    marginBottom: 15,
    justifyContent: 'center',
    marginLeft: 18,
  },

  boxhorizontalLine: {
    height: 1,
    width: '94%',
    backgroundColor: '#FFF',
    marginVertical: 5,
    justifyContent: 'center',
  },

  graph: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 5,
  },

  boximg: {
    width: 40,
    height: 45,
    marginLeft: 2,
    marginTop: 2,
  },

  graphcontainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFF',
    width: '30%',
    padding: 4,
    borderRadius: 4,
  },

  iconbox: {
    borderColor: '#FFF',
    borderRadius: 2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgView: {},

  img: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },

  box: {
    backgroundColor: '#303234',
    borderRadius: 8,
    width: '90%',
    opacity: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
    marginLeft: 18,
  },

  para: {
    color: 'black',
    opacity: 0.5,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  paraView: {
    margin: 25,
  },
  boxText: {
    color: 'white',
    fontSize: 15,
    margin: 5,
    fontWeight: 'bold',
  },
});
