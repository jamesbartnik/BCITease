import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this dependency installed

export default function ProfileScreen() {
	const [name, setName] = useState('');
	const [program, setProgram] = useState('');
	const [quote, setQuote] = useState('');
	const [bio, setBio] = useState('');
	const [hobbies, setHobbies] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>YOUR PROFILE</Text>
				<View style={styles.headerBar} />
			</View>
			<TouchableOpacity style={styles.uploadButton}>
				<Ionicons name="camera" size={24} color="#212e40" />
				<Text style={styles.uploadButtonText}>Upload your photo</Text>
			</TouchableOpacity>
			<TextInput
				style={styles.input}
				placeholder="Choose a display name"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Choose a program"
				value={program}
				onChangeText={setProgram}
			/>
			<TextInput
				style={styles.input}
				placeholder="Write your favorite quote here"
				value={quote}
				onChangeText={setQuote}
			/>
			<TextInput
				style={styles.input}
				placeholder="Tell us a little about yourself"
				value={bio}
				onChangeText={setBio}
			/>
			<TextInput
				style={styles.input}
				placeholder="Write your hobbies here"
				value={hobbies}
				onChangeText={setHobbies}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	header: {
		alignItems: 'center',
		marginTop: 24,
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#724d1d', // brown
	},
	headerBar: {
		width: '90%',
		height: 2,
		backgroundColor: '#724d1d', // brown
		marginVertical: 8,
	},
	uploadButton: {
		height: '30%',
		backgroundColor: '#d3d3d3', // grey
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 8,
		flexDirection: 'row',
	},
	uploadButtonText: {
		color: '#212e40', // dark blue
		fontWeight: 'bold',
		marginLeft: 8,
	},
	input: {
		backgroundColor: '#efdd8c', // yellow
		padding: 16,
		borderRadius: 8,
		marginVertical: 8,
		color: '#212e40', // dark blue
	},
});
