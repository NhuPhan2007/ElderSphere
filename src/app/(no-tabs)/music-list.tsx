import { ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import ButtonBack from '@/components/elder/ButtonBack'
import MusicCard from '@/components/music/MusicCard'
import { listAlbums, listMusics } from '../data/music'
import { useLocalSearchParams } from 'expo-router'

const MusicList = () => {
  const params = useLocalSearchParams()
  const { id, musicType } = params
  const listMusic = listAlbums.find((album) => {
    return album.id === Number(id) && album.musicType === musicType
  })
  return (
    <View className="flex-1 bg-gray-200">
      <ScrollView>
        <View>
          <StatusBar barStyle={'light-content'} />
          <ImageBackground source={{ uri: listMusic?.thumbnail }} className="h-96 w-full relative">
            <ScreenWrapper>
              <View className="flex-row px-5 relative z-10">
                <ButtonBack isBlur={true} />
              </View>
            </ScreenWrapper>
            {/* Blur Layout */}
            <View className="bg-gray-800 absolute top-0 left-0 right-0 bottom-0 opacity-20" />
          </ImageBackground>
        </View>
        <View className="px-5 py-4 space-y-6">
          <View>
            <Text className="text-2xl font-semibold text-gray-800">{listMusic?.title}</Text>
            <Text className="text-base text-gray-500">Album - 2022</Text>
          </View>
          <View className="space-y-4">
            {listMusic?.list.map((music) => (
              <View key={music.id}>
                <MusicCard music={music} listMusic={listMusics} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MusicList
