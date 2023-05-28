import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";

function PlatformIconList({ platforms }) {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: FaPhone,
    web: FaGlobe,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <React.Fragment key={platform.slug}>
          {/* <span>{platform.name}</span> */}
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        </React.Fragment>
      ))}
    </HStack>
  );
}

export default PlatformIconList;

// In the code snippet you provided, the iconMap object maps platform slugs to their corresponding icon components. When rendering the Icon component, the as prop is set to the icon component retrieved from iconMap using the platform's slug. This tells the Icon component to render the specified icon.

// For example, when iconMap[platform.slug] is FaWindows, it means that the platform slug is "pc" and the corresponding icon component is FaWindows from the react-icons/fa library. The Icon component then renders the FaWindows icon.

// If you want to display the platform slug names instead of icons, you can modify the code as follows:

// {platforms.map((platform) => (
//     <React.Fragment key={platform.slug}>
//       <span>{platform.slug}</span>
//     </React.Fragment>
//   ))}

// import { HStack, Icon, Text } from "@chakra-ui/react";
// import React from "react";
// import {
//   FaWindows,
//   FaPlaystation,
//   FaXbox,
//   FaApple,
//   FaLinux,
//   FaAndoid,
// } from "react-icons/fa";
// import { MdPhonesIphone } from "react-icons/md";
// import { SiNintendo } from "react-icons/si";
// import { BsGlobe } from "react-icons/bs";

// function PlatformIconList({ platforms }) {
//     const iconMap: {[key: string] : IconType}={
//         ps: FaWindows,
//         playstation: FaPlaystation,
//         xbox: FaXbox,
//         android:FaAndoid,
//         nintendo: SiNintendo,
//         mac: FaApple,
//         linux: FaLinux,
//         ios: MdPhonesIphone,
//         web: BsGlobe
//     }
//   return (
//     <HStack>
//       {platforms.map((platform) => (
//         <Text>{platform.name}</Text>
//         <Icon as={iconMap[platform.slug]}/>
//       ))}
//     </HStack>
//   );
// }

// export default PlatformIconList;
