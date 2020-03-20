import Sound from 'react-native-sound';

export default {
    startSoundEffect : (source,volume=1) => {
        const sound = new Sound(source,Sound.MAIN_BUNDLE,(error) => {
            if(error) throw new Error(error);
            sound.setVolume(volume);
            sound.setNumberOfLoops(0);
            sound.play();
        })
    }
}