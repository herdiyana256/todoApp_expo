// Default code
// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });



// import { StyleSheet, Text, View } from 'react-native'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello React Native!</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })





/*

1. View
View adalah component paling mendasar dalam proses membangun UI di React Native.
Cara kerjanya seperti menjadi wadah (pembungkus) yang digunakan untuk menyusun tata letak component-component pada React Native dan ini mirip dengan <div> dalam code JSX.
*/


// import React from 'react'
// import { View, Text } from 'react-native'

// const App = () => {
//   return (
//     <View>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ fontSize: 40 }}>Hello React Native</Text>
//       </View>
//       <View style={{ flexDirection: 'row', height: 100 }}>
//         <View style={{ backgroundColor: 'blue', flex: 1 }} />
//         <View style={{ backgroundColor: 'red', flex: 1 }} />
//         <View style={{ backgroundColor: 'green', flex: 1 }} />
//       </View>
//     </View>
//   )
// }

// export default App





/*

2. Text
Sebelumnya kita sudah menggunakan component ini untuk menampilkan tulisan “Hello React Native”. Component ini berfungsi untuk menampilkan teks. Component Text dapat dilakukan nesting (<Text> di dalam <Text>).
Berikut penulisan codenya :
*/

// import React from 'react'
// import { View, Text } from 'react-native'

// const App = () => {
//   return (
//     <Text style={{ fontSize: 30 }}>
//       <Text style={{ fontWeight: 'bold' }}>Belajar Progate</Text>
//       <Text>Saat ini aku sedang berlajar mengenai text komponen</Text>
//       <View>
//         <Text>Ayo belajar dengan Guru Domba</Text>
//       </View>
//     </Text>
//   )
// }

// export default App









/*

3. StyleSheet
React Native mendukung style inline, tetapi StyleSheet.create lebih umum digunakan dalam menambahkan style.

*/

// import React from 'react'
// import { StyleSheet, Text, View, Image } from 'react-native'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Nemo Kucing Lucu</Text>
//       <Text style={styles.title}>Nemo Anaknya Kenthung</Text>
//       <Text style={styles.title}>Nemo Anaknya Brocally</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#eaeaea',
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// })

// export default App





// Gambar
// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Nemo Kucing Lucu</Text>
//       <Image
//         source={require('./assets/images/nemo.jpg')} // Sesuaikan dengan path gambar Anda
//         style={styles.image}
//       />
//       <Text style={styles.title}>Nemo Anaknya Kenthung</Text>
//       <Image
//         source={require('./assets/images/kenthung.jpg')} // Sesuaikan dengan path gambar Anda
//         style={styles.image}
//       />
//       <Text style={styles.title}>Nemo Anaknya Brocally</Text>
//       <Image
//         source={require('./assets/images/brocally.jpg')} // Sesuaikan dengan path gambar Anda
//         style={styles.image}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#eaeaea',
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginVertical: 16,
//   },
// });

// export default App;






// import React from 'react'
// import { View, Image, StyleSheet } from 'react-native'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require('../../../nemoApp/assets/images/nemo.jpg')} />
//       <Image
//         style={styles.image}
//         source={{
//           // uri: 'https://progate.com/images/ogp/about.png',
//         }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// })

// export default App




// Gambar nemo dan tulisan 
// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Nemo Nemo Nemo</Text>
//       <Image style={styles.image} source={require('../../../nemoApp/assets/images/nemo.jpg')} />
//       <Text style={styles.title}>Nemo Kucing Lucu</Text>
//       <Image style={styles.image} source={require('../../../nemoApp/assets/images/nemo.jpg')} />
//       <Text style={styles.title}>Nemo Anaknya Kenthung</Text>
//       <Image style={styles.image} source={require('../../../nemoApp/assets/images/nemo.jpg')} />
//       <Text style={styles.title}>Nemo Anaknya Brocally</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#eaeaea',
//     alignItems: 'center', // Menambahkan centering pada items
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     marginVertical: 16,
//   },
// });

// export default App;










/*
5. TextInput
TextInput adalah component yang berfungsi untuk memasukan text melalui keyboard/clipboard.

*/


// import React, { useState } from 'react'
// import { View, StyleSheet, TextInput } from 'react-native'

// const App = () => {
//   const [name, setName] = useState()
//   const [age, setAge] = useState()
//   const [question, setQuestion] = useState()

//   return (
//     <View>
//       <TextInput
//         style={styles.input}
//         placeholder="Masukan Nama"
//         onChangeText={setName}
//         value={name}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Masukan Umur"
//         onChangeText={setAge}
//         value={age}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.multiLineInput}
//         placeholder="Masukan pertanyaan"
//         multiline={true}
//         numberOfLines={3}
//         onChangeText={setQuestion}
//         value={question}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 60,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   multiLineInput: {
//     height: 100,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// })

// export default App







//Scroolview
//Component ScrollView berfungsi untuk membungkus component-component yang berpotensi melewati batas dan menjadikan layar jadi bisa digulung (scroll).
// import React from 'react'
// import { StyleSheet, View, ScrollView, Text } from 'react-native'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.text}>
//           Herdiyan Herdiyan Herdiyan
//         </Text>
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     backgroundColor: 'gray',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// })

// export default App;






//2. FlatList
//Component yang digunakan untuk perulangan component.
//Tanpa menambahkan ScrollView, ini akan membuat layar dapat digulung (scroll) saat mengandung daftar item yang panjang.
// import React from 'react'
// import { View, FlatList, StyleSheet, Text } from 'react-native'

// const items = [
//   {
//     id: '1',
//     title: 'Item Pertama',
//   },
//   {
//     id: '2',
//     title: 'Item Kedua',
//   },
//   {
//     id: '3',
//     title: 'Item Ketiga',
//   },
//   {
//     id: '4',
//     title: 'Item Keempat',
//   },
//   {
//     id: '5',
//     title: 'Item Kelima',
//   },
//   {
//     id: '6',
//     title: 'Item Keenam',
//   },
//   {
//     id: '7',
//     title: 'Item Ketujuh',
//   },
//   {
//     id: '8',
//     title: 'Item Kedelapan',
//   },
//   {
//     id: '9',
//     title: 'Item Kesembilan',
//   },
//   {
//     id: '10',
//     title: 'Item Kesepuluh',
//   },
// ]

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// )

// const App = () => {
//   const renderItem = ({ item }) => <Item title={item.title} />

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// })

// export default App









//Mari kita lihat sebuah contoh dari code ScrollView:
// import React from 'react'
// import { View, ScrollView, StyleSheet, Text } from 'react-native'

// const items = [
//   {
//     id: '1',
//     title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//   },
//   {
//     id: '2',
//     title: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
//   },
//   {
//     id: '3',
//     title: 'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
//   },
//   {
//     id: '4',
//     title: 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
//   },
//   {
//     id: '5',
//     title: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
//   },
//   {
//     id: '6',
//     title: 'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
//   },
// ]

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {items.map((item) => (
//           <View key={item.id} style={styles.item}>
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// })

// export default App






//2. View Yang Dapat Disentuh (Touch)
//Component Button adalah component dasar yang bisa dijalankan di platform manapun.
//Component Button adalah component dasar yang bisa dijalankan di platform manapun.
// import React from 'react'
// import { View, Button, Alert, StyleSheet } from 'react-native'

// const App = () => {
//   return (
//     <View>
//       <View style={styles.buttonWrapper}>
//         <Button
//           title="Default Button"
//           onPress={() => Alert.alert('Simple Button')}
//         />
//       </View>
//       <View style={styles.buttonWrapper}>
//         <Button
//           title="Color Button"
//           color="#f194ff"
//           onPress={() => Alert.alert('Color Button')}
//         />
//       </View>
//       <View style={styles.buttonWrapper}>
//         <Button
//           title="Disabled Button"
//           disabled
//           onPress={() => Alert.alert('Disable Button')}
//         />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   buttonWrapper: {
//     margin: 10,
//   },
// })

// export default App









//2.TouchableOpacity
//TouchableOpacity adalah sebuah container yang berfungsi untuk membuat component anaknya dapat merespon sentuhan layar. Jadi component ini hampir sama dengan component Button, akan tetapi component ini lebih bisa diubah-ubah daripada component Button.
// import React from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

// const App = () => {
//   const [count, setCount] = React.useState(0);
//   const onPress = () => setCount(count + 1);

//   return (
//     <View style={styles.container}>
//       <Text>You clicked {count} times</Text>
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text style={styles.buttonText}>Press Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#674f74',
//     padding: 10,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#FFF',
//   },
// });

// export default App;




//Note App
import React, { useState } from 'react';
import Home from '../screens/home';
import AddNote from '../screens/addNote';
import EditNote from '../screens/editNote';

// Tambahkan function "addNote" sebagai prop
const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case 'add':
      // Berikan function "addNote" ke component "AddNote"
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      id: 2,
      title: 'Note kedua',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      id: 3,
      title: 'Note ketiga',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      id: 4,
      title: 'Note keempat',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      id: 5,
      title: 'Note kelima',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
    setCurrentPage('home'); // Return to home after adding note
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      // Berikan function addNote sebagai prop
      addNote={addNote}
    />
  );
};

export default App;
