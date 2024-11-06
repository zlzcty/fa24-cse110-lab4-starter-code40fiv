import { Request, Response } from "express";
import { Database } from "sqlite"

export async function createExpenseServer(req: Request, res: Response, db: Database) {
    const { id, cost, name } = req.body;

    if (!name || !id || !cost) {
        return res.status(400).send({ error: `Missing required fields; id:${id}, cost:${cost}, description:${name}` });
    }

    try {
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, name, cost]);
    } catch (error) {
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };

    res.status(201).send({ id, name, cost });


}


export async function deleteExpense(req: Request, res: Response, db: Database) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ error: "Missing required field" });
    }

    try {
        const result = await db.run('DELETE FROM expenses WHERE id = ?', [id]);
        if (result.changes === 0) {
            return res.status(404).send({ error: `Expense with id ${id} not found` });
        }
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "server error" });
    }

    // expenses.splice(expenses.findIndex(expense => expense.id === id), 1);
    // res.status(204).send(id);
}

export async function getExpenses(req: Request, res: Response, db: Database) {
    // res.status(200).send({ "data": expenses });

    try {
        const result = await db.all("SELECT * FROM expenses");
        return result;
    } catch (error) {
        return res.status(500).send({ error: "server error" });
    }

}