import Ember from 'ember';

const { get, set} = Ember;

export default Ember.Component.extend({

	history: [],

	actions: {
		selectValue(value) {
			set(this, 'selected', value);
		},

		search(value) {
			const { length } = value;
			return this._getFilteredHistory(value);
		},

		handleEnterKey(dropdown, e) {
		    if (e.keyCode !== 13) {  return; }
		    let { value } = e.target;
		    let history = get(this, 'history');
		    set(this, 'selected', value);
		   	if (!history.includes(value)) {
		    	history.push(value);
		   	}

		}
	},

	_getFilteredHistory(value) {
        let results = [];
        get(this, 'history').forEach(function(item) {
            let substr = item.substring(0, value.length).toUpperCase();
            if (substr === value.toUpperCase()) {
                results.push(item);
            }
        });
        return results;
    },

});
