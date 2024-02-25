import { useCallback } from 'react'
import ReactFlow, { Background, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
	{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
	{ id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export default function AppEdit() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

	return (
		<div className='grid h-full min-h-[85vh] items-stretch gap-6 md:grid-cols-[1fr_4fr]'>
			<div>
				<h2 className='text-3xl font-semibold'>API Endpoints</h2>
			</div>

			<div className='w-full h-full rounded-md bg-white'>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
				>
					<Controls />
					<MiniMap />
					<Background variant='dots' gap={12} size={1} />
				</ReactFlow>
			</div>
		</div>
	)
}
