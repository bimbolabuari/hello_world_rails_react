import axios from 'axios';

const getInitialGreeting = async () => {
    const response = await axios.get('v1/greetings')
    return response.data
}

export default getInitialGreeting