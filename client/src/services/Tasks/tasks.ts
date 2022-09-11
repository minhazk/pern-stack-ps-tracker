import { TaskProps } from '../../components/Home/Task';
import makeRequest from '../makeRequest';

const getTasks = () => {
    return makeRequest('/tasks');
};

const createTask = (task: TaskProps) => {
    return makeRequest('/tasks', {
        method: 'POST',
        data: task,
    });
};

const deleteTask = (id: string) => {
    return makeRequest(`/tasks/${id}`, {
        method: 'DELETE',
    });
};

export { getTasks, createTask, deleteTask };
