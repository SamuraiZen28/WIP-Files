enum RoleStatusEnum {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Done = 'Done'
}

interface Task {
    id: string;
    status: RoleStatusEnum;
}

let notStartedStatus: RoleStatusEnum = RoleStatusEnum.NotStarted;

\.......
