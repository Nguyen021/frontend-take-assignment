import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index: React.FC = () => {
    //todo status tag 
    const tags: string[] = ["All", "Pending", "Completed"]
    const [status, setStatus] = useState<string>('all'); // Default to 'all'

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        {/* <div className="pt-10 space-x-2">
                {tags.map(item =>
                    <a
                        className="text-[#334155] hover:text-blue-400 border font-semibold
                         py-3 px-6 rounded-full border-[#E2E8F0] cursor-pointer rounded-md inline-block "
                    >{item}</a>)}
        </div> */}

        <Tabs.Root defaultValue="all"  onValueChange={setStatus}>
          <Tabs.List className="pt-8 pb-6 space-x-2">
            <Tabs.Trigger value="all" className={` hover:text-blue-400 border font-semibold
                         py-3 px-6 rounded-full border-[#E2E8F0] cursor-pointer rounded-md inline-block 
                         ${status === 'all' ? 'bg-[#334155] text-white' : 'text-[#334155]' }`}>
              All
            </Tabs.Trigger>
            <Tabs.Trigger value="pending" className={` hover:text-blue-400 border font-semibold
                         py-3 px-6 rounded-full border-[#E2E8F0] cursor-pointer rounded-md inline-block
                          ${status === 'pending' ? 'bg-[#334155] text-white' : 'text-[#334155]' }`}>
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger value="completed" className={`hover:text-blue-400 border font-semibold
                         py-3 px-6 rounded-full border-[#E2E8F0] cursor-pointer rounded-md inline-block
                          ${status === 'completed' ? 'bg-[#334155] text-white' : 'text-[#334155]' }`}>
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all" className="mt-4">
            <TodoList status="all"/>
          </Tabs.Content>
          <Tabs.Content value="pending" className="mt-4">
            <TodoList  status="pending"/>
          </Tabs.Content>
          <Tabs.Content value="completed" className="mt-4">
            <TodoList status="completed" />
          </Tabs.Content>
        </Tabs.Root>

        {/* <div className="pt-10">
          <TodoList />
        </div> */}

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
