const TimeStamp = ( _ts, _opt = {} ) => {
	let _base = new Date( _ts ),
		_date = _base.getDate() + "/" + ( _base.getMonth() + 1 ) + "/" + _base.getFullYear(),
		_time = " " + _base.getHours() + ":" + _base.getMinutes();

    return _date + ( _opt.time ? _time : '' )
}

export default TimeStamp
