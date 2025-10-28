(async () => {
    console.log("Loading custom syntax highlights...");

    // 使用对象数组来配置文件信息
    const files = [
        { name: "codemirror.risc.js", description: "RISC-V syntax highlight" }
        // { name: "codemirror.another.js", description: "Another syntax highlight" },
        // { name: "codemirror.third.js", description: "Third syntax highlight" }
    ];
    
    const basePath = "file://" + logseq.api.get_current_graph().path + "/logseq/";
    
    // 循环加载并执行每个文件
    for (const file of files) {
        try {
            const filePath = basePath + file.name;
            console.log("Loading " + file.description + "...");
            
            const res = await fetch(filePath);
            const code = await res.text();
            eval(code);
            console.log(file.description + " loaded successfully!");
        } catch (err) {
            console.error("Failed to load " + file.description + " :", err);
        }
    }
    
    console.log("All syntax highlights loaded!");
})();
