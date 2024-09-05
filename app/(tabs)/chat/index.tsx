// ChatScreen.tsx
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatItem from '@/components/ChatItem';

const demoChats = [
	{
		userName: 'Alice',
		recentMessage: 'Hey, how are you?',
		timestamp: '2:30 PM',
		newMessages: 3,
	},
	{
		userName: 'Bob',
		recentMessage: 'Are we still on for tomorrow?',
		timestamp: '1:15 PM',
		newMessages: 1,
	},
	{
		userName: 'Charlie',
		recentMessage: 'Got it, thanks!',
		timestamp: '12:45 PM',
		newMessages: 0,
	},
	{
		userName: 'David',
		recentMessage: 'See you soon!',
		timestamp: '11:30 AM',
		newMessages: 2,
	},
	{
		userName: 'Eve',
		recentMessage: 'Can you send me the files?',
		timestamp: '10:00 AM',
		newMessages: 5,
	},
];

export default function ChatScreen() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>CONVERSATIONS</Text>
				<View style={styles.headerBar} />
			</View>
			{demoChats.map((chat, index) => (
				<ChatItem
					key={index}
					userName={chat.userName}
					recentMessage={chat.recentMessage}
					timestamp={chat.timestamp}
					newMessages={chat.newMessages}
				/>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		alignItems: 'center',
		marginTop: 24,
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#212e40', // dark blue
	},
	headerBar: {
		width: '90%',
		height: 2,
		backgroundColor: '#724d1d', // brown
		marginTop: 8,
	},
});
