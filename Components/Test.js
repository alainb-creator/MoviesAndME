// Components/Test.js

import React from 'react'
import { StyleSheet, View, Platform, Animated,PanResponder,Dimensions } from 'react-native'
//import HelloWorld from './HelloWorld'
import { duration } from 'moment'
import { Easing } from 'react-native-reanimated'

class Test extends React.Component {

  // constructeur pour animation
  constructor(props) {
    super(props)
    this.state = {
      /*
      topPosition: new Animated.Value(0),// pour animation
      leftPosition: new Animated.Value(0),// pour animation
*/
      topPosition: 0,
      leftPosition: 0,
    }
    var { height, width } = Dimensions.get('window');
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        let touches = evt.nativeEvent.touches;
        if (touches.length == 1) {
          this.setState({
            topPosition: touches[0].pageY - height / 2,
            leftPosition: touches[0].pageX - width / 2
          })
        }
      }
    })
  }


  /* animation lineaire
componentDidMount() {
    Animated.timing(
      this.state.topPosition,
      {
        toValue: 100,
        duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
        easing: Easing.linear,
      }
    ).start() // N'oubliez pas de lancer votre animation avec la fonction start()
}
*/
  /* animation ressort
  componentDidMount() {
    Animated.spring(
      this.state.topPosition,
      {
        toValue: 100,
        speed: 4,
        bounciness: 30
      }
    ).start();
  }
  */
  /* animation decay vitesse de départ avec décélération
  componentDidMount() {
    Animated.decay(
      this.state.topPosition,
      {
        velocity: 0.8,
        deceleration: 0.997,
      }
    ).start();
  }
  */
  /* séquence d'animation
  componentDidMount() {
    Animated.sequence([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 100,
          tension: 8,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.elastic(2)
        }
      )
    ]).start()
  }
  */
 /*
  // animation parallele
  componentDidMount() {
    Animated.parallel([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 100,
          tension: 8,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.leftPosition,
        {
          toValue: 100,
          duration: 1000,
          easing: Easing.elastic(2)
        }
      )
    ]).start()
  }
*/
  render() {
    return (
      /* pour animation
      <View style={styles.main_container}>
        <Animated.View style={[styles.animation_view, {
          top: this.state.topPosition,
          left: this.state.leftPosition
        }]}>
        </Animated.View>
      </View>
   */ 
  // pour pan responder
  <View style={styles.main_container}>
  <View
    {...this.panResponder.panHandlers}
    style={[styles.animation_view, { top: this.state.topPosition, left: this.state.leftPosition }]}>
  </View>
</View>
   
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  /*
   subview_container: {
     ...Platform.select({
       ios: {
         backgroundColor: 'red',
         height: 100,
         width: 50
       },
       android: {
         backgroundColor: 'blue',
         height: 50,
         width: 100
       }
     })
   },
 */
  animation_view: {
    backgroundColor: 'blue',
    width: 100,
    height: 100
  }

})


export default Test