var n = this,
    t = (this.visible = !1, this.activeView = "hours", this.hTimeout = null, this.mTimeout = null, this.input = t, this.input.readOnly = !0, this.config = e, this.time = new C(0, 0), this.selected = new C(0, 0), this.timepicker = {
        overlay: M.createElem("div", {
            class: "mdtimepicker hidden"
        }),
        wrapper: M.createElem("div", {
            class: "mdtp__wrapper",
            tabindex: 0
        }),
        timeHolder: {
            wrapper: M.createElem("section", {
                class: "mdtp__time_holder"
            }),
            hour: M.createElem("span", {
                class: "mdtp__time_h"
            }, "12"),
            dots: M.createElem("span", {
                class: "mdtp__timedots"
            }, ":"),
            minute: M.createElem("span", {
                class: "mdtp__time_m"
            }, "00"),
            am_pm: M.createElem("span", {
                class: "mdtp__ampm"
            }, "AM")
        },
        clockHolder: {
            wrapper: M.createElem("section", {
                class: "mdtp__clock_holder"
            }),
            am: M.createElem("span", {
                class: "mdtp__am"
            }, "AM"),
            pm: M.createElem("span", {
                class: "mdtp__pm"
            }, "PM"),
            clock: {
                wrapper: M.createElem("div", {
                    class: "mdtp__clock"
                }),
                dot: M.createElem("span", {
                    class: "mdtp__clock_dot"
                }),
                hours: M.createElem("div", {
                    class: "mdtp__hour_holder"
                }),
                minutes: M.createElem("div", {
                    class: "mdtp__minute_holder"
                })
            },
            buttonsHolder: {
                wrapper: M.createElem("div", {
                    class: "mdtp__buttons"
                }),
                btnClear: M.createElem("span", {
                    class: "mdtp__button clear-btn"
                }, "清除"),
                btnOk: M.createElem("span", {
                    class: "mdtp__button ok"
                }, "確定"),
                btnCancel: M.createElem("span", {
                    class: "mdtp__button cancel"
                }, "取消")
            }
        }
    }, this.setMinTime(this.input.dataset.mintime || this.config.minTime), this.setMaxTime(this.input.dataset.maxtime || this.config.maxTime), n.timepicker);