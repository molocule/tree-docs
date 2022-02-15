function getDocuments() {
    let test1 = {
        id: 1,
        name: "Test 1",
    };
    let test2 = {
        id: 2,
        name: "Test 2",
    };
    let test3 = {
        id: 3,
        name: "Test 3",
    };
    return [test1, test2, test3];
}

function getTree(document_id) {
    // Need to join Hierarchy, Documents, + Users
    let data = [
        {   child_did: 2,
            parent_did: 1,
            author_name: "Bob"
        },
        {   child_did: 3,
            parent_did: 1,
            author_name: "Maria"
        },
        {   child_did: 4,
            parent_did: 2,
            author_name: "Clarisse"
        },
        {   child_did: 5,
            parent_did: 4,
            author_name: "Tom"
        },
        {   child_did: 6,
            parent_did: 1,
            author_name: "Larry"
        },
        {   child_did: 7,
            parent_did: 1,
            author_name: "David"
        },
        {   child_did: 8,
            parent_did: 2,
            author_name: "Anya"
        },
    ];

    let graphRep = data.reduce((graph, record) => {
        if (!graph[record.child_did]) {
            graph[record.child_did] = {children: [], indegree: 0};
        }
        if (!graph[record.parent_did]) {
            graph[record.parent_did] = {children: [], indegree: 0};
        }
        graph[record.child_did]["author_name"] = record.author_name;
        graph[record.child_did].indegree ++ ;
        graph[record.parent_did].children.push(record.child_did);
        return graph;
    }, {});

    let root = 0;
    for (const [key, value] of Object.entries(graphRep)) {
       if (value.indegree === 0) {
           root = key;
           break;
       }
    }

    console.log(root);
    console.log(graphRep);

    let ret = collapseGraph(root, graphRep);
    ret.name = "root";

    console.log(ret);

    return ret;

}

function collapseGraph(root, graph) {
    if (graph[root].children.length < 1) {
        return { value: root, 
                 name: graph[root].author_name };
    }

    let children = [];
    for (let i = 0; i < graph[root].children.length; i ++) {
        children.push(collapseGraph(graph[root].children[i], graph));
    }
    return { value: root, 
             name: graph[root].author_name,
             children: children };
}

export {getDocuments, getTree};