import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

export default function SettingsScreen() {
	const [readReceiptsEnabled, setReadReceiptsEnabled] = useState(false);
	const [notificationsEnabled, setNotificationsEnabled] = useState(false);
	const appVersion = '1.0.0'; // Replace with your app version

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>SETTINGS</Text>
				<View style={styles.headerBar} />
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Edit Profile</Text>
			</TouchableOpacity>
			<View style={styles.toggleContainer}>
				<Text style={styles.toggleLabel}>Read Receipts</Text>
				<Switch
					value={readReceiptsEnabled}
					onValueChange={setReadReceiptsEnabled}
				/>
			</View>
			<View style={styles.toggleContainer}>
				<Text style={styles.toggleLabel}>Notifications</Text>
				<Switch
					value={notificationsEnabled}
					onValueChange={setNotificationsEnabled}
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Terms of service</Text>
			</TouchableOpacity>
			<View style={styles.versionContainer}>
				<Text style={styles.versionText}>Version: {appVersion}</Text>
			</View>
			<View style={styles.bottomButtons}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.deleteButton]}>
					<Text style={styles.buttonText}>Delete Account</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		justifyContent: 'space-between',
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
	button: {
		backgroundColor: '#efdd8c', // yellow
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
	},
	buttonText: {
		color: '#212e40', // dark blue
		fontWeight: 'bold',
		fontSize: 16,
	},
	toggleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	toggleLabel: {
		color: '#f4a738',
		fontWeight: 'bold',
		fontSize: 16,
	},
	versionContainer: {
		alignItems: 'center',
		marginVertical: 16,
	},
	versionText: {
		color: '#212e40', // dark blue
		fontWeight: 'bold',
	},
	bottomButtons: {
		gap: 16,
	},
	deleteButton: {
		backgroundColor: '#ff4d4d', // red
	},
});
