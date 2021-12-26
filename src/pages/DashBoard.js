    import React from 'react';
    import FeaturedInfo from '../components/FeaturedInfo';
    import BarCharts from '../components/BarCharts';
    import Pie from '../components/Pie';

export default function DashBoard() {
    return (
        <div>
            <FeaturedInfo />
            <div className='charts'>
            <BarCharts />
            <Pie />
            <Pie />
            </div>
        </div>
    )
}
