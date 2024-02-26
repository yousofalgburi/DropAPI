import { useCallback, useState } from 'react'
import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	DefaultEdgeOptions,
	Edge,
	FitViewOptions,
	MiniMap,
	Node,
	NodeTypes,
	OnConnect,
	OnEdgesChange,
	OnNodesChange,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
} from 'reactflow'

import CustomNode from './CustomNode'

const initialNodes: Node[] = [
	{ id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
	{ id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
]

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]

const fitViewOptions: FitViewOptions = {
	padding: 0.2,
}

const defaultEdgeOptions: DefaultEdgeOptions = {
	animated: true,
}

const nodeTypes: NodeTypes = {
	custom: CustomNode,
}

export default function AppEdit() {
	const [nodes, setNodes] = useState<Node[]>(initialNodes)
	const [edges, setEdges] = useState<Edge[]>(initialEdges)

	const onNodesChange: OnNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	)
	const onEdgesChange: OnEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges]
	)
	const onConnect: OnConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges])

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
					fitView
					fitViewOptions={fitViewOptions}
					defaultEdgeOptions={defaultEdgeOptions}
					nodeTypes={nodeTypes}
				>
					<Controls />
					<MiniMap />
					<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
				</ReactFlow>
			</div>
		</div>
	)
}
