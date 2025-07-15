
// 時間選取器

mdtimepicker.defaults({ theme: 'green', hourPadding: true, clearBtn: true });

function log(message) {
    document.querySelector('#loggerTxt').value = message
}

window.onload = function() {
    mdtimepicker('#picker1', {
        events: {
            timeChanged: function(data) {
                console.log('timeChanged', data)
                log('timeChanged: ' + data.value)
            }
        }
    })
    // mdtimepicker('#picker1', 'setValue', '12:00 PM')

    mdtimepicker('#picker2', {
        readOnly: false,
        is24hour: true, //format: 'h:mm tt',
        events: {
            ready: function() { console.log('ready', this) },
            shown: function() { console.log('shown', this) },
            hidden: function() { console.log('hidden', this) },
            timeChanged: function(data) {
                console.log('timeChanged', data)
                log('timeChanged: ' + data.value)
            }
        }
    })
}