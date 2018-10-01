import React from 'react';
import dynamic from 'next/dynamic'

const Hello = dynamic(() => import('../../features/Hello'))

export default () => (
	<div>Welcome :) <Hello /></div>
)
