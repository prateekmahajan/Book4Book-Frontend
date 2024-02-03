import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import PageLayout from '../Components/PageLayout';
import ListItem from '../Components/ListItem';
import ListItemSeparetor from '../Components/ListItemSeparetor';
import img from '../assets/jacket.jpg'


const data = [
    {
        id: 1,
        title: 'Harmani',
        description: 'Description',
        image: img
    },
    {
        id: 2,
        title: 'Chris',
        description: 'Description',
        image: img
    },
]


class MessagesPage extends Component {
    render() {
        return (
            <PageLayout>
                <View style={{ height: '100%' }}>
                    <FlatList
                        data={data}
                        keyExtractor={data => data.id}
                        renderItem={({ item }) => {
                            return <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log('clicked', item)} onDelete={() => console.log('deteted')} />
                        }}
                        ItemSeparatorComponent={<ListItemSeparetor />}
                        refreshing={false}
                        onRefresh={() => console.log('refreshed')}
                    />
                </View>
            </PageLayout>
        );
    }
}

export default MessagesPage;