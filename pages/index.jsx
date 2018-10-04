import React from 'react';
import dynamic from 'next/dynamic'

const Welcome = dynamic(() => import('./../features/welcome'))

export default () => (
	<div><Welcome /></div>
)
