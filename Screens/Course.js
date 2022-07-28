import { StatusBar } from "expo-status-bar";
//import * as Font from 'expo-font';
import { AppLoading } from "expo";
import * as React from "react";
import TopHeader from "../Components/TopHeader";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";

import Footer from "../Components/Footer";

function Course({ navigation, route }) {
  // get the current theme

  const theme = useSelector((state) => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  const { ID } = route.params;
  const { Desc } = route.params;
  const { InPer } = route.params;
  const { Online } = route.params;
  const { StartTime } = route.params;
  const { EndTime } = route.params;
  const { Monday } = route.params;
  const { Tuesday } = route.params;
  const { Wednesday } = route.params;
  const { Thursday } = route.params;
  const { Friday } = route.params;

  return (
    <View
      style={
        mode == "light" ? styles.appContainer_light : styles.appContainer_dark
      }
    >
      <View style={styles.headerContainer}>
        <TopHeader navigation={navigation} />
      </View>
      <View style={styles.middleContainer}>
        <View>
          <Text
            style={mode == "light" ? styles.heading_light : styles.heading_dark}
          >
            {" "}
            {ID}{" "}
          </Text>
          <Text
            style={
              mode == "light" ? styles.subtitle_light : styles.subtitle_dark
            }
          >
            Schedule
          </Text>

          <Text
            style={
              mode == "light"
                ? styles.bodyTextCoursePage_light
                : styles.bodyTextCoursePage_dark
            }
          >
            {Online ? (
              <Text>Offered Online</Text>
            ) : (
              <Text>Offered in Person</Text>
            )}
          </Text>
          {Monday ? (
            <Text
              style={
                mode == "light"
                  ? styles.bodyTextCoursePage_light
                  : styles.bodyTextCoursePage_dark
              }
            >
              Monday
              {StartTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {StartTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}AM
                    </Text>
                  ) : StartTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
              -
              {EndTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {EndTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}AM
                    </Text>
                  ) : EndTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
            </Text>
          ) : null}
          {Tuesday ? (
            <Text
              style={
                mode == "light"
                  ? styles.bodyTextCoursePage_light
                  : styles.bodyTextCoursePage_dark
              }
            >
              Tuesday
              {StartTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {StartTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}AM
                    </Text>
                  ) : StartTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
              -
              {EndTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {EndTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}AM
                    </Text>
                  ) : EndTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
            </Text>
          ) : null}
          {Wednesday ? (
            <Text
              style={
                mode == "light"
                  ? styles.bodyTextCoursePage_light
                  : styles.bodyTextCoursePage_dark
              }
            >
              Wednesday
              {StartTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {StartTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}AM
                    </Text>
                  ) : StartTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}PM
                    </Text>
                  ) : (
                    <Text
                      sstyle={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
              -
              {EndTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {EndTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}AM
                    </Text>
                  ) : EndTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
            </Text>
          ) : null}
          {Thursday ? (
            <Text
              style={
                mode == "light"
                  ? styles.bodyTextCoursePage_light
                  : styles.bodyTextCoursePage_dark
              }
            >
              Thursday
              {StartTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {StartTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}AM
                    </Text>
                  ) : StartTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
              -
              {EndTime != null ? (
                <Text style={styles.bodyText}>
                  {EndTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}AM
                    </Text>
                  ) : EndTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
            </Text>
          ) : null}
          {Friday ? (
            <Text
              style={
                mode == "light"
                  ? styles.bodyTextCoursePage_light
                  : styles.bodyTextCoursePage_dark
              }
            >
              Friday
              {StartTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {StartTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}AM
                    </Text>
                  ) : StartTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {" "}
                      {StartTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
              -
              {EndTime != null ? (
                <Text
                  style={
                    mode == "light"
                      ? styles.bodyTextCoursePage_light
                      : styles.bodyTextCoursePage_dark
                  }
                >
                  {EndTime < 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}AM
                    </Text>
                  ) : EndTime === 12 ? (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime}PM
                    </Text>
                  ) : (
                    <Text
                      style={
                        mode == "light"
                          ? styles.bodyTextCoursePage_light
                          : styles.bodyTextCoursePage_dark
                      }
                    >
                      {EndTime - 12}PM
                    </Text>
                  )}
                </Text>
              ) : null}
            </Text>
          ) : null}
          <Text
            style={
              mode == "light" ? styles.subtitle_light : styles.subtitle_dark
            }
          >
            Information
          </Text>
          <Text
            style={
              mode == "light"
                ? styles.bodyTextCoursePage_light
                : styles.bodyTextCoursePage_dark
            }
          >
            {Desc}
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Course;
