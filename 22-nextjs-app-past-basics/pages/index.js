import Head from 'next/head';
import { MongoClient } from 'mongodb'; // Will not be with clientside bundle

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups!"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;
// 	// fetch data from an API
// 	// this code only runs on server
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// good for SEO
	// this code only runs on server
	// fetch data from an API

	const client = await MongoClient.connect(
		'mongodb+srv://bryan_loh:6QBKl9HqKYxxZAZ2@cluster0.9nrmgz7.mongodb.net/meetups?retryWrites=true&w=majority'
	);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => {
				return {
					title: meetup.title,
					address: meetup.address,
					image: meetup.image,
					id: meetup._id.toString(),
				};
			}),
		},
		revalidate: 10,
	};
}

export default HomePage;
