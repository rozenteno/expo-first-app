import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#25292e" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          headerTitle: "StickerSmash",
          // Hide back button screen
          headerLeft: () => <></>,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              // name is icon's name
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          headerTitle: "About",
          // focused boolean when is focused
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              // name is icon's name
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="+not-found"
        options={{
          // this likes hides white menu bar up on top
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
