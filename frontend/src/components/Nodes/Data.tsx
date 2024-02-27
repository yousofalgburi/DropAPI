import { Handle, Position } from 'reactflow'
import { shallow } from 'zustand/shallow'

import { useStore } from '@/lib/NodeEditorStore'

// @ts-expect-error TODO: fix this
const selector = (id) => (store) => ({
	// @ts-expect-error TODO: fix this
	setFrequency: (e) => store.updateNode(id, { frequency: +e.target.value }),
	// @ts-expect-error TODO: fix this
	setType: (e) => store.updateNode(id, { type: e.target.value }),
})

// @ts-expect-error TODO: fix this
export default function Data({ id, data }) {
	const { setType } = useStore(selector(id), shallow)

	return (
		<div className='rounded-md bg-white min-w-36 text-black shadow-xl'>
			<p className='rounded-t-md px-2 py-1 bg-green-500 text-white text-sm'>Data</p>

			<label className='flex flex-col px-2 pt-1 pb-4'>
				<p className='text-xs font-bold mb-2'>Data Source</p>

				<select className='nodrag' value={data.type} onChange={setType}>
					<option value='none'>None</option>
				</select>
			</label>

			<Handle className='w-2 h-2' type='source' position={Position.Right} />
		</div>
	)
}
