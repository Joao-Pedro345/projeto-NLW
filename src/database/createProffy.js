module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    // inserir dados na table de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        ); 
    `) /* seria quase que uma promessa do db, "espera nessa linha que eu faço", só que a função deve ser async */

    const proffy_id = insertedProffy.lastID

    // inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
           ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"                
            );
    `)

    const class_id = insertedClass.lastID

    // inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) Values (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    }) /* é tipo um loop */

    // aqui vou executar todos os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}