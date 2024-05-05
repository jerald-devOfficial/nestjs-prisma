import { Book } from '@prisma/client'
import { BookService } from './book.service'
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common'

export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBook(): Promise<Book[]> {
    return this.bookService.getAllBook()
  }

  @Post()
  async postBook(@Body() postData: Book): Promise<Book> {
    return this.bookService.createBook(postData)
  }

  @Get(':id')
  async getBook(@Param('id') id: number): Promise<Book | null> {
    return this.bookService.getBook(id)
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<Book | null> {
    return this.bookService.deleteBook(id)
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() putData: Book
  ): Promise<Book> {
    return this.bookService.updateBook(id, putData)
  }
}
