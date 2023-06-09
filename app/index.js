import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from '../constants'
import { NearbyJobs, PopularJobs, Welcome } from '../components'

export default function Home() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{ 
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={ false }>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                        searchTerm={ searchTerm }
                        setSearchTerm={ setSearchTerm }
                        handleClick={() => {
                            if(searchTerm) router.push(`/search/${searchTerm}`)
                        }}
                    />
                    <PopularJobs/>
                    <NearbyJobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}