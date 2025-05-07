import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style={"light"} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: "StickerSmash",
            // Hide back button screen
            headerLeft: () => <></>,
            //Hide header
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{
            // this likes hides white menu bar up on top
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
