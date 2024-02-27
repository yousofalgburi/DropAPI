import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap } from 'reactflow'

import 'reactflow/dist/style.css'

import { useStore } from '@/lib/NodeEditorStore'
import { shallow } from 'zustand/shallow'
import Data from './Nodes/Data'

// @ts-expect-error TODO: fix this
const selector = (store) => ({
	nodes: store.nodes,
	edges: store.edges,
	onNodesChange: store.onNodesChange,
	onEdgesChange: store.onEdgesChange,
	addEdge: store.addEdge,
})

const nodeTypes = {
	data: Data,
}

export default function AppEdit() {
	const store = useStore(selector, shallow)

	return (
		<div className='grid h-full min-h-[85vh] items-stretch gap-6 md:grid-cols-[1fr_4fr]'>
			<div>
				<h2 className='text-3xl font-semibold'>API Endpoints</h2>
			</div>

			<div className='w-full h-full rounded-md bg-white'>
				<ReactFlow
					nodes={store.nodes}
					nodeTypes={nodeTypes}
					edges={store.edges}
					onNodesChange={store.onNodesChange}
					onEdgesChange={store.onEdgesChange}
					onConnect={store.addEdge}
					deleteKeyCode='Delete'
				>
					<Controls />
					<MiniMap />
					<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
				</ReactFlow>
			</div>
		</div>
	)
}
