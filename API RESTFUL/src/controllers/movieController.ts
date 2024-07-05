import { Request, Response } from "express";
import { Movie } from "../models/Movie";
import mongoose, { isValidObjectId } from "mongoose";

export class MovieController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const movie = await Movie.create(data);
      return res.status(201).json(movie);
    } catch (error) {
      return res.status(500).json({ msg: "Erro no servidor" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const movies = await Movie.find();
      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json({ msg: "Erro no servidor" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!isValidObjectId(id)) {
        return res.status(404).json({ msg: "Filme não encontrado" });
      }

      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ msg: "Filme não encontrado" });
      }
      return res.status(200).json(movie);
    } catch (error) {
      return res.status(500).json({ msg: "Erro no servidor" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body;

      if (!isValidObjectId(id)) {
        return res.status(404).json({ msg: "Filme não encontrado" });
      }

      const movie = await Movie.findByIdAndUpdate(id, data);

      if (!movie) {
        return res.status(404).json({ msg: "Filme não encontrado" });
      }

      return res.status(200).json({ msg: "Filme atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro no servidor" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!isValidObjectId(id)) {
        return res.status(404).json({ msg: "Filme não encontrado" });
      }

      const movie = await Movie.findById(id);

      if (!movie) {
        return res.status(404).json({ msg: "Filme não encontrado" });
      }

      await Movie.findByIdAndDelete(id);
      return res.status(200).json({ msg: "Filme deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ msg: "Erro no servidor" });
    }
  }
}
