// //keen ui outside click

// export function on(event, target, callback, options = { passive: true }) {
//     target.addEventListener(event, callback, options);

//     return () => {
//         target.removeEventListener(event, callback, options);
//     };
// };

// // eslint-disable-next-line max-params
// function onKey(key, event, target, callback, options) {
//     return on(event, target, e => {
//         if (!key) {
//             // We call back for every key if there's no specific key
//             callback(e);
//         } else if (key === e.key || key === e.keyCode) {
//             // Otherwise we call back only if the key matches
//             callback(e);
//         }
//     }, options);
// };

// export function onKeydown(keys, target, callback, options) {
//     return onKey(keys, 'keydown', target, callback, options);
// };

// export function onKeyup(keys, target, callback, options) {
//     return onKey(keys, 'keyup', target, callback, options);
// };

// export function onKeypress(keys, target, callback, options) {
//     return onKey(keys, 'keypress', target, callback, options);
// };

// addExternalClickListener(elements = [this.$el], callback = null, options = { passive: true }) {
//     elements = Array.isArray(elements) ? elements : [elements];

//     this.destroyExternalClickListener = events.on('click', document, e => {
//         for (let i = 0; i < elements.length; i++) {
//             if (elements[i].contains(e.target)) {
//                 return; // End early, click was internal
//             }
//         }

//         if (typeof callback === 'function') {
//             callback(e);
//         } else {
//             this.$emit('external-click', e);
//         }
//     }, options);
// };
// removeExternalClickListener() {
//     if (this.destroyExternalClickListener) {
//         this.destroyExternalClickListener();
//         this.destroyExternalClickListener = null;
//     }
// }
