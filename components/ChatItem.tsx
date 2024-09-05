// components/ChatItem.tsx
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface ChatItemProps {
	profilePicture?: string;
	userName: string;
	recentMessage: string;
	timestamp: string;
	newMessages: number;
}

const ChatItem: React.FC<ChatItemProps> = ({profilePicture, userName, recentMessage, timestamp, newMessages}) => {
	const navigation = useNavigation<NavigationProp<any>>();
	const defaultProfilePicture = require('@/assets/images/placeholder_avatar.png');

	return (
		<TouchableOpacity
			style={styles.container}
			// onPress={() => navigation.navigate('ChatWindow', {userName, profilePicture})}
		>
			<Image
				source={profilePicture ? {uri: profilePicture} : defaultProfilePicture}
				style={styles.profilePicture}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.userName}>{userName}</Text>
				<Text style={styles.recentMessage}>{recentMessage}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.timestamp}>{timestamp}</Text>
				{newMessages > 0 && (
					<View style={styles.notificationContainer}>
						<Ionicons name="notifications" size={16} color="#fff"/>
						<Text style={styles.notificationText}>{newMessages}</Text>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 16,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	profilePicture: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 16,
	},
	textContainer: {
		flex: 1,
	},
	userName: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#212e40',
	},
	recentMessage: {
		fontSize: 14,
		color: '#666',
	},
	infoContainer: {
		alignItems: 'flex-end',
	},
	timestamp: {
		fontSize: 12,
		color: '#999',
	},
	notificationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f00',
		borderRadius: 12,
		paddingHorizontal: 6,
		paddingVertical: 2,
		marginTop: 4,
	},
	notificationText: {
		color: '#fff',
		marginLeft: 4,
		fontSize: 12,
	},
});

export default ChatItem;
