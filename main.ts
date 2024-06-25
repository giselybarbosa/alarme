input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
})
