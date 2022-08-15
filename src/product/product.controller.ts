import { Body, Controller, Get, Post, UseInterceptors, UploadedFiles, Param, Res } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService) {}

    @Post('new') 
    @UseInterceptors(
        FilesInterceptor('image', 20, {
          storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
              const name = file.originalname.split('.')[0];
              const fileExtName = extname(file.originalname);
              const randomName = Array(4)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
              callback(null, `${name}-${randomName}${fileExtName}`);
            },
          }),
          fileFilter: (req, file, callback) => {
              if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return callback(new Error('Only image files are allowed!'), false);
              }
              callback(null, true);
            },
        }),
      )
    async createProduct(@Body() body : ProductDto, @UploadedFiles() files) {
        console.log(body);
        const response = [];
        files.forEach((file : any) => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
            };
            response.push(fileReponse);
        });
        return await this.productService.createProduct(body, response);
    }

    @Get()
    async getProduct() {
        return await this.productService.getAllProducts()
    }

    @Get(':id')
    async getProductById(@Param('id') id : number) {
        return this.productService.getProductById(id);
    }

    // @Post()
    // @UseInterceptors(
    //   FileInterceptor('image', {
    //     storage: diskStorage({
    //       destination: './files',
    //       filename: editFileName,
    //     }),
    //     fileFilter: imageFileFilter,
    //   }),
    // )
    // async uploadedFile(@UploadedFile() file) {
    //   const response = {
    //     originalname: file.originalname,
    //     filename: file.filename,
    //   };
    //   return response;
    // }

    // @Post('multiple')
    // @UseInterceptors(
    //   FilesInterceptor('image', 20, {
    //     storage: diskStorage({
    //       destination: './uploads',
    //       filename: (req, file, callback) => {
    //         const name = file.originalname.split('.')[0];
    //         const fileExtName = extname(file.originalname);
    //         const randomName = Array(4)
    //           .fill(null)
    //           .map(() => Math.round(Math.random() * 16).toString(16))
    //           .join('');
    //         callback(null, `${name}-${randomName}${fileExtName}`);
    //       },
    //     }),
    //     fileFilter: (req, file, callback) => {
    //         if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    //           return callback(new Error('Only image files are allowed!'), false);
    //         }
    //         callback(null, true);
    //       },
    //   }),
    // )
    // async uploadMultipleFiles(@UploadedFiles() files) {
    //   const response = [];
    //   files.forEach((file : any) => {
    //     const fileReponse = {
    //       originalname: file.originalname,
    //       filename: file.filename,
    //     };
    //     response.push(fileReponse);
    //     console.log(response);
    //   });
    //   return response;
    // }

    // @Get(':imgpath')
    // seeUploadedFile(@Param('imgpath') image, @Res() res) {
    //     return res.sendFile(image, { root: './uploads' });
    // }
}
