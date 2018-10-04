import React from 'react';
import dynamic from 'next/dynamic'

const Hello = dynamic(() => import('../hello'))

export default () => (
	<div>Welcome :) <Hello /></div>
)
