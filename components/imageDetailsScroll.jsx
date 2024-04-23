const ImageDetailsScroll = ({images}) => {
    return (
      <SafeAreaView>
          <FlatList
          data={images} 
          keyExtractor={(item) => item.$id} 
          renderItem={({item})=> (
            //   <Image source={item.image} resizeMode='cover'/>
            <Text>{item.id}</Text>
          )}
          />
      </SafeAreaView>
    )
  }
  