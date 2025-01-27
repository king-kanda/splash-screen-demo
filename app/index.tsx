import { Text, View } from "react-native";
import SplashScreenView from "./splashScreenView";
import HomeScreenView from "./home";
import React , {useState , useEffect} from 'react';


export default function Index() {

  const [isSplash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);
  }, []);

  return (
  <>
    {isSplash ? <SplashScreenView/> : <HomeScreenView/>}
  </>
  )
  
}
