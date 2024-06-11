import axios from 'axios'

const api = axios.create({
	baseURL: '',
	headers:{
	'Content-Type': 'applicaton/json',
	},
})
