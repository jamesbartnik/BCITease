import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function Home() {
	return (
		<View style={styles.container}>
			<Image
				source={require('@/assets/images/placeholder_avatar.png')}
				style={styles.profilePicture}
			/>
			<ThemedView style={styles.profileContainer}>
				<ThemedText type="title" style={styles.userName}>
					James Bartnik
				</ThemedText>
				<ThemedText style={styles.userProgramTitle}>
					Program
				</ThemedText>
				<ThemedText style={styles.userProgramDescription}>
					Digital Design and Development
				</ThemedText>
				<View style={styles.headerBar} />
			</ThemedView>
			<ThemedView style={styles.quoteContainer}>
				<ThemedText style={styles.userQuote}>
					I don't mind living in a man's world, as long as I can be a woman in it.
				</ThemedText>
			</ThemedView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#212e40', // dark blue
	},
	profilePicture: {
		width: "auto",
		marginBottom: 16,
	},
	profileContainer: {
		alignItems: 'center',
		padding: 16,
	},
	userName: {
		color: 'white',
		marginBottom: 16,
	},
	userProgramTitle: {
		color: '#efdd8c',
		fontWeight: 'bold',
	},
	userProgramDescription: {
		color: '#efdd8c',
	},
	headerBar: {
		width: '90%',
		height: 2,
		backgroundColor: '#efdd8c', // yellow
		marginTop: 8,
	},
	quoteContainer: {
		alignItems: 'center',
		padding: 16,
	},
	userQuote: {
		color: 'white',
		textAlign: 'center',
	},
});
