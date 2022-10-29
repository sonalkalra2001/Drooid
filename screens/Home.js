import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function Home({ route, navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.headView}>
          <Text style={styles.main}>
            <Text style={styles.head}> KL Rahul or Rishabh Pant </Text>
            <Text style={styles.time}> 7h ago</Text>
          </Text>
        </View>
        <View style={StyleSheet.imgView}>
          <Image source={require("./assets/rishabKL.jpg")} style={styles.img} />
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>
            Rishabh Pant Play In Place Of KL Rahul Against South Africa As
            Opener?
          </Text>
          <View style={styles.boxhorizontalLine} />
          <View style={styles.graph}>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="facebook" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="twitter" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="instagram" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
          </View>
        </View>
        <View style={styles.paraView}>
          <Text style={styles.para}>
            Rahul has found going tough at the top of the order and he has not
            been able to rotate strike freely as well. There have been calls for
            trying out Rishabh Pant at the top of the order, considering is
            currently warming the bench as Dinesh Karthik is being preferred
            ahead of him as the wicketkeeper. India batting coach Vikram Rathour
            addressed a press conference on Saturday ahead of the game against
            South Africa, and he was asked whether Rishabh Pant can be tried out
            as an opener instead of KL Rahul.
          </Text>
          <br />
          <Text style={styles.para}>
            Rathour said: "No, we're not really thinking that. Two games, I
            don't think that's a good enough sample size anyways. He's been
            batting really well and he's batted really well in the practice
            games, also, so we're not looking at any such thing at the moment."
          </Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.headView}>
          <Text style={styles.main}>
            <Text style={styles.head}> Indian Cricket Team </Text>
            <Text style={styles.time}> 23h ago</Text>
          </Text>
        </View>
        <View style={StyleSheet.imgView}>
          <Image
            source={require("./assets/perthCamp.jpeg")}
            style={styles.img}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>
            T20 World Cup: India look for tips from Perth camp for South Africa
            game
          </Text>
          <View style={styles.boxhorizontalLine} />
          <View style={styles.graph}>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="facebook" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="twitter" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="instagram" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
          </View>
        </View>
        <View style={styles.paraView}>
          <Text style={styles.para}>
            India may have put up camp in Perth with the Pakistan game in mind
            but it is against South Africa that all the planning may come to
            fruition. The South African players too earlier took the
            early-morning flight from Sydney, where they demolished Bangladesh,
            and will face the same challenges in acclimatizing fast to vastly
            different conditions.
          </Text>
          <br />
          <Text style={styles.para}>
            The old WACA and the new Perth Stadium are on either side of the
            Swan River, and there’ll be some choppy waters for India to
            negotiate come Sunday.
          </Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.headView}>
          <Text style={styles.main}>
            <Text style={styles.head}> India v/s Pakistan </Text>
            <Text style={styles.time}> 72h 15m ago</Text>
          </Text>
        </View>
        <View style={StyleSheet.imgView}>
          <Image
            source={require("./assets/ViratKohli.jpg")}
            style={styles.img}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>
            Virat Kohli ends innings as India’s most successful Test skipper
          </Text>
          <View style={styles.boxhorizontalLine} />
          <View style={styles.graph}>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="facebook" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="twitter" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
            <View style={styles.graphcontainer}>
              <View style={styles.iconbox}>
                <Icon name="instagram" size={20} color="#FFF" />
              </View>
              <Image
                source={require("./assets/graph.png")}
                style={styles.boximg}
              />
            </View>
          </View>
        </View>
        <View style={styles.paraView}>
          <Text style={styles.para}>
            Long used to dominating the top of the charts, Kohli has now slipped
            to ninth in the list of leading ICC Test batsmen. Rohit Sharma has
            moved up to the fifth position. Kohli’s on-field behaviour too has
            often come under criticism—the latest instance being his outburst on
            the stump mic against a DRS decision in the third Test — and the
            BCCI had wanted head coach Rahul Dravid to have a word with him.
          </Text>
          <br />
          <Text style={styles.para}>
            Star Indian batter Virat Kohli is back breaking records and cricket
            is healing! During his instant classic match-winning knock of 82*
            off 53 balls against Pakistan during the ICC T20 World Cup at
            Melbourne Cricket Ground (MCG), 'Chasemaster' Kohli went on another
            record-breaking spree.
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
    color: "black",
    fontSize: 15,
  },

  head: {
    fontWeight: "bold",
  },
  headView: {
    padding: 18,
  },
  time: {
    fontSize: 11,
    opacity: 0.6,
    color: "#000",
  },

  horizontalLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#000",
    opacity: 0.5,
    marginTop: 8,
    marginBottom: 15,
    justifyContent: "center",
    marginLeft: 18,
  },

  boxhorizontalLine: {
    height: 1,
    width: "94%",
    backgroundColor: "#FFF",
    marginVertical: 5,
    justifyContent: "center",
  },

  graph: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 5,
  },

  boximg: {
    width: 60,
    height: 40,
    marginLeft: 2,
    marginTop: 2,
  },

  graphcontainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#FFF",
    width: "30%",
    padding: 4,
    borderRadius: 4,
  },

  iconbox: {
    borderColor: "#FFF",
    borderRadius: 2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#000",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  imgView: {},

  img: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },

  box: {
    backgroundColor: "#303234",
    borderRadius: 8,
    width: "90%",
    opacity: 0.85,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -145,
    marginLeft: 18,
  },

  para: {
    color: "black",
    opacity: 0.8,
    fontWeight: 400,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  paraView: {
    margin: 25,
  },
  boxText: {
    color: "white",
    fontSize: 15,
    margin: 5,
    marginLeft: 12,
    fontWeight: "bold",
  },
});