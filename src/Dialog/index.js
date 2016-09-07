import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';

import { Dialog, DialogDefaultActions } from '../react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class DialogSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Dialog>
                        <Dialog.Title><Text>Hello world</Text></Dialog.Title>
                        <Dialog.Content>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <DialogDefaultActions
                                actions={['Dismiss', 'Keep']}
                                onActionPress={() => {}}
                            />
                        </Dialog.Actions>
                    </Dialog>
                </View>
            </Container>
        );
    }
}

export default DialogSpec;