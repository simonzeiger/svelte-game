import { writable } from 'svelte/store'

export const dataChannel = writable(null as RTCDataChannel)