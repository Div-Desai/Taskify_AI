import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/store/taskSlice";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Dashboard() {
  /* ---------------- CLIENT STATE (REDUX) ---------------- */
  const list = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(
      addTask({
        id: Date.now(),
        title: "Learn Redux Toolkit",
      })
    );
  }

  /* ---------------- SERVER STATE (REACT QUERY - GET) ---------------- */
  const fetchTodos = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    return res.json();
  };

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  /* ---------------- SERVER STATE (REACT QUERY - POST) ---------------- */
  const queryClient = useQueryClient();

  const createTodo = async (newTodo) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    return res.json();
  };

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      // refetch todos after mutation
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleCreateTodo() {
    mutation.mutate({
      title: "New Todo from Mutation",
      completed: false,
    });
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Redux Section */}
      <section className="space-y-2">
        <Button onClick={handleAddTask}>Add Task (Redux)</Button>

        {list.map((task) => (
          <div key={task.id} className="border rounded p-3 bg-white">
            {task.title}
          </div>
        ))}
      </section>

      {/* React Query GET */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Todos (GET)</h2>

        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}

        {todos &&
          todos.map((todo) => (
            <div key={todo.id} className="border rounded p-3 bg-gray-100">
              {todo.title}
            </div>
          ))}
      </section>

      {/* React Query POST */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Create Todo (POST)</h2>

        <Button onClick={handleCreateTodo} disabled={mutation.isLoading}>
          {mutation.isLoading ? "Creating..." : "Create Todo"}
        </Button>

        {mutation.isError && (
          <p className="text-red-500">Failed to create todo</p>
        )}

        {mutation.isSuccess && (
          <p className="text-green-600">Todo created successfully</p>
        )}
      </section>
    </div>
  );
}
