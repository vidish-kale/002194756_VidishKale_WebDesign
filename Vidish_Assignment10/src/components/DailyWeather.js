import React, { Component } from 'react';
import moment from 'moment';

class DailyWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: JSON.parse(localStorage.getItem('dailyWeather')),
            currentDailyWeather: JSON.parse(localStorage.getItem('currentDailyWeather')),
            city: JSON.parse(localStorage.getItem('location'))
        }
    }

    render() {
        const card = [];
        const { currentDailyWeather, city } = this.state;
        if (this.state.data.length) {
            this.state.data.forEach((obj, i) => {
                let newDate = new Date(obj.dt_txt);
                const imgURL = `owf owf-${obj.weather[0].id} owf-5x`;
                card.push(
                    <div className="weather dailycard" key={`main_${i}`}>
                        <h3 className="card-title" key={`h3_${i}`}>{moment(newDate).format('dddd')}</h3>
                        <p className="text-muted" key={`p_${i}`}>{moment(newDate).format('MMMM Do, h:mm a')}</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <i className={imgURL} key={`i_${i}`}></i>
                            <h2 key={`h2_${i}`} style={{ margin: 'auto 5px' }}>{Math.round(obj.main.temp)}<sup>°C</sup></h2>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h2 key={`h4_${i}`} style={{ margin: 'auto 5px' }}>{Math.round(obj.main.temp_max)}<sup>°C</sup></h2>
                            <h2 key={`h5_${i}`} style={{ margin: 'auto 5px', color: '#bababa' }}>{Math.round(obj.main.temp_min)}<sup>°C</sup></h2>
                        </div>
                        <div className="card-body" key={`card_${i}`}>
                            <p className="card-text" key={`pdesc_${i}`}>{obj.weather[0].description}</p>
                        </div>
                    </div>
                )
            });
        }
        let newDate = new Date(currentDailyWeather.dt_txt);
        const imgURL1 = `owf owf-${currentDailyWeather.weather[0].id} owf-5x`;
        return (
            <div className='rightbg widthSpacing'>
                <h1 className='header-title'>Today's temperature and forecast!</h1>
                <div className='currentTemp'>
                    <div style={{ display: 'flex' }}>
                        <i className={imgURL1}></i>
                        <h2 className='degreeHead'>{Math.round(currentDailyWeather.main.temp)}<sup className='supDegree'>°C</sup></h2>
                    </div>
                    <div className='speed'>
                        <div className='subHead'>Humidity: {currentDailyWeather.main.humidity}%</div>
                        <div className='subHead'>Wind: {currentDailyWeather.wind.speed} km/h</div>
                    </div>
                    <div className='detailsHead'>
                        <h2 className='removeMargin'>{city.name}, {city.country}</h2>
                        <h2 className='removeMargin'>{moment(newDate).format('dddd')}</h2>
                        <h2 className='removeMargin'>{moment(newDate).format('MMMM Do')}</h2>
                        <h2 className='removeMargin'>{currentDailyWeather.weather[0].description}</h2>
                    </div>
                </div>
                <div className='dailyWeatherContainer'>{card}</div>
            </div>
        )
    }
}

export default DailyWeather;