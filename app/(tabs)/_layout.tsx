import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#f4a738', // orange
				tabBarInactiveTintColor: '#724d1d', // brown
				tabBarStyle: {backgroundColor: '#efdd8c'}, // yellow
				headerShown: false,
			}}>
			<Tabs.Screen
				name="(home)/index"
				options={{
					title: 'Home',
					tabBarIcon: ({color, focused}) => (
						<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
					),
				}}
			/>
			<Tabs.Screen
				name="chat/index"
				options={{
					title: 'Chat',
					tabBarIcon: ({color, focused}) => (
						<TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color}/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					title: 'Profile',
					tabBarIcon: ({color, focused}) => (
						<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color}/>
					),
				}}
			/>
			<Tabs.Screen
				name="settings/index"
				options={{
					title: 'Settings',
					tabBarIcon: ({color, focused}) => (
						<TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color}/>
					),
				}}
			/>
		</Tabs>
	);
}
